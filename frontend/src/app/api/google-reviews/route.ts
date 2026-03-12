import { NextResponse } from 'next/server';

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description?: string;
};

const DEFAULT_QUERY = 'Ruggeri Electricidad y Mecanica, Córdoba, Argentina';

const NEW_PLACES_BASE_URL = 'https://places.googleapis.com/v1';

const sanitizePlaceId = (placeId: string): string => placeId.replace(/^places\//, '');

const getPlaceDetailsUrl = (placeId: string): string => {
  const params = new URLSearchParams({
    languageCode: 'es',
  });

  return `${NEW_PLACES_BASE_URL}/places/${sanitizePlaceId(placeId)}?${params.toString()}`;
};

const getCommonHeaders = (apiKey: string, fieldMask: string) => ({
  'Content-Type': 'application/json',
  'X-Goog-Api-Key': apiKey,
  'X-Goog-FieldMask': fieldMask,
});

const normalizeReviews = (reviews: unknown): GoogleReview[] => {
  if (!Array.isArray(reviews)) return [];

  const normalized: GoogleReview[] = [];

  for (const review of reviews) {
    if (!review || typeof review !== 'object') continue;

    const reviewData = review as {
      author_name?: unknown;
      authorAttribution?: {
        displayName?: unknown;
      };
      rating?: unknown;
      text?: unknown;
      textPayload?: {
        text?: unknown;
      };
      relative_time_description?: unknown;
      relativePublishTimeDescription?: unknown;
    };

    const author_name =
      typeof reviewData.author_name === 'string'
        ? reviewData.author_name
        : typeof reviewData.authorAttribution?.displayName === 'string'
          ? reviewData.authorAttribution.displayName
          : 'Cliente';
    const rating = typeof reviewData.rating === 'number' ? reviewData.rating : 5;
    const text =
      typeof reviewData.text === 'string'
        ? reviewData.text
        : typeof (reviewData.text as { text?: unknown })?.text === 'string'
          ? ((reviewData.text as { text: string }).text)
          : typeof reviewData.textPayload?.text === 'string'
            ? reviewData.textPayload.text
            : '';
    const relative_time_description =
      typeof reviewData.relative_time_description === 'string'
        ? reviewData.relative_time_description
        : typeof reviewData.relativePublishTimeDescription === 'string'
          ? reviewData.relativePublishTimeDescription
          : undefined;

    if (!text.trim()) continue;

    normalized.push({
      author_name,
      rating,
      text,
      relative_time_description,
    });

    if (normalized.length >= 5) break;
  }

  return normalized;
};

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  const configuredPlaceId = process.env.GOOGLE_MAPS_PLACE_ID;
  const placeQuery = process.env.GOOGLE_MAPS_PLACE_QUERY || DEFAULT_QUERY;

  try {
    let placeId = configuredPlaceId;

    if (!placeId) {
      const searchResponse = await fetch(`${NEW_PLACES_BASE_URL}/places:searchText`, {
        method: 'POST',
        headers: getCommonHeaders(apiKey, 'places.id'),
        body: JSON.stringify({
          textQuery: placeQuery,
          languageCode: 'es',
        }),
        next: { revalidate: 300 },
      });

      const searchData = await searchResponse.json();
      placeId = searchData?.places?.[0]?.id;
    }

    if (!placeId) {
      return NextResponse.json({ reviews: [] }, { status: 200 });
    }

    const detailsResponse = await fetch(getPlaceDetailsUrl(placeId), {
      headers: getCommonHeaders(apiKey, 'reviews'),
      next: { revalidate: 300 },
    });

    const detailsData = await detailsResponse.json();
    const reviews = normalizeReviews(detailsData?.reviews);

    return NextResponse.json({ reviews }, { status: 200 });
  } catch {
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }
}
