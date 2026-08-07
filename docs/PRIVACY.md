# Privacy and repository visibility

This project contains personal birth information for a named individual, including:

- full name
- exact birth date
- exact birth time
- birthplace
- geographic coordinates

That information is enough to identify a private person's natal chart very precisely.

## Recommendation

If Karin has not explicitly agreed to public publication of these details, make the GitHub repository private before continuing development or sharing the project publicly.

The migration itself does not require the repository to be public.

## Lovable guidance

When creating the Lovable version:

- do not add birth data to analytics events
- do not send birth data to third-party services unless required and intentionally approved
- do not put API keys or secrets in client-side code
- keep any future dynamic astrology API credentials server-side
- avoid logging full birth profiles in production

## Public-facing product option

If the finished app will be publicly shareable but the source data should remain private, use a derived static profile in the frontend and remove unnecessary identifying metadata from the deployed bundle.

For example, the public experience may need the displayed placements and interpretations but may not need the exact birthplace coordinates.
