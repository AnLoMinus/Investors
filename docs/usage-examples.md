# Usage Examples

## Creating a new investor card
1. Copy `templates/investor-card-template.md` to `investors/investor-XXXX-name.md`.
2. Replace the frontmatter with the new investor details.
3. Update the **Contribution Log** table with the initial entry.
4. Add a matching row to `data/donations-log.csv` using the template.

## Keeping data in sync
- The `id` and `slug` fields in the Markdown frontmatter should match the `id` and `slug` in `data/investors.json`.
- Always record currency and totals in both the Markdown and JSON to enable future automation.

## Sharing a card
Publish direct GitHub links, for example:
`https://github.com/AnLoMinus/Investors/blob/main/investors/investor-0001-john-doe.md`

## Example snippet
```
| id            | date       | amount | currency | project               | note                      |
| ------------- | ---------- | ------ | -------- | --------------------- | ------------------------- |
| investor-0001 | 2025-12-11 | 5000   | ILS      | Nesle SparKing Studio | Initial studio equipment  |
```
