# Contributing to SparkInvest Grid

Thank you for helping grow the SparKing investor repository! Follow these steps to add or update cards and data.

## Adding a new investor
1. Copy `templates/investor-card-template.md` to `investors/investor-XXXX-name.md`.
2. Fill the frontmatter fields and the basic information sections.
3. Add an initial entry to the contribution log table in the new card.
4. Append a matching row to `data/donations-log.csv` using `templates/donation-log-template.md` as a guide.
5. Add or update the JSON entry in `data/investors.json` to keep metadata structured.

## Updating contributions
- Update both the Markdown card and `data/donations-log.csv` for every new contribution.
- Keep totals in sync between the card and the JSON record.

## Style guidelines
- Use ISO dates (YYYY-MM-DD).
- Keep currency codes in uppercase.
- Prefer concise notes that explain the purpose of each contribution.

## Submitting changes
- Ensure files are committed with clear messages.
- Run any validation scripts when they become available.
- Open a pull request summarizing what changed and how the data was updated.
