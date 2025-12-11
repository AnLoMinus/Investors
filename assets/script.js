const investorGrid = document.getElementById('investor-grid');
const investorNotice = document.getElementById('investor-notice');
const donationTableBody = document.querySelector('#donation-table tbody');
const donationNotice = document.getElementById('donation-notice');
const metricTotal = document.getElementById('metric-total');
const metricActive = document.getElementById('metric-active');

const formatCurrency = (value, currency) => {
  if (Number.isNaN(value)) return '—';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value);
};

const renderInvestors = (records) => {
  if (!records.length) {
    investorNotice.hidden = false;
    investorNotice.textContent = 'No investors found. Add new records to data/investors.json.';
    return;
  }

  investorGrid.innerHTML = '';

  records.forEach((investor) => {
    const card = document.createElement('article');
    card.className = 'card';

    const header = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = investor.display_name;
    header.appendChild(title);

    const badges = document.createElement('div');
    badges.className = 'badges';

    const typeBadge = document.createElement('span');
    typeBadge.className = 'badge';
    typeBadge.textContent = investor.type;
    badges.appendChild(typeBadge);

    const statusBadge = document.createElement('span');
    statusBadge.className = `badge ${investor.status === 'active' ? 'success' : 'pending'}`;
    statusBadge.textContent = investor.status;
    badges.appendChild(statusBadge);

    header.appendChild(badges);
    card.appendChild(header);

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `${investor.city}, ${investor.country} · Joined ${investor.joined_at}`;
    card.appendChild(meta);

    const amount = document.createElement('p');
    amount.className = 'meta';
    amount.innerHTML = `<strong>${formatCurrency(investor.total_amount, investor.currency)}</strong> committed (${investor.currency})`;
    card.appendChild(amount);

    if (Array.isArray(investor.projects_focus)) {
      const focus = document.createElement('p');
      focus.className = 'meta';
      focus.textContent = `Focus: ${investor.projects_focus.join(' · ')}`;
      card.appendChild(focus);
    }

    const link = document.createElement('a');
    link.href = `investors/${investor.id}-${investor.slug}.md`;
    link.className = 'inline-link';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open investor card →';
    card.appendChild(link);

    investorGrid.appendChild(card);
  });
};

const renderMetrics = (records) => {
  const total = records.reduce((sum, investor) => sum + (Number(investor.total_amount) || 0), 0);
  const active = records.filter((i) => i.status === 'active').length;
  const currency = records.find((i) => i.currency) ? records.find((i) => i.currency).currency : 'USD';

  metricTotal.textContent = formatCurrency(total, currency);
  metricActive.textContent = active;
};

const parseCsv = (csv) => {
  const lines = csv.trim().split(/\r?\n/);
  const rows = lines.slice(1).map((line) => line.split(','));
  return rows
    .filter((row) => row.length >= 7)
    .map((row, index) => ({
      index: row[0] || index + 1,
      date: row[1],
      investor: row[2],
      name: row[3],
      project: row[4],
      amount: row[5],
      currency: row[6],
      type: row[7],
      notes: row.slice(8).join(',') || '—',
    }));
};

const renderDonations = (rows) => {
  if (!rows.length) {
    donationNotice.hidden = false;
    donationNotice.textContent = 'No donations found. Update data/donations-log.csv to populate this table.';
    return;
  }

  rows.forEach((row) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.index}</td>
      <td>${row.date}</td>
      <td>${row.investor} — ${row.name}</td>
      <td>${row.project}</td>
      <td>${row.amount}</td>
      <td>${row.currency}</td>
      <td>${row.type}</td>
      <td>${row.notes}</td>
    `;
    donationTableBody.appendChild(tr);
  });
};

const fetchInvestors = async () => {
  try {
    const res = await fetch('data/investors.json');
    if (!res.ok) throw new Error('Unable to load investors');
    const data = await res.json();
    renderInvestors(data);
    renderMetrics(data);
  } catch (error) {
    investorNotice.hidden = false;
    investorNotice.textContent = 'Could not load investor data. Please check data/investors.json.';
  }
};

const fetchDonations = async () => {
  try {
    const res = await fetch('data/donations-log.csv');
    if (!res.ok) throw new Error('Unable to load donations');
    const text = await res.text();
    const rows = parseCsv(text);
    renderDonations(rows);
  } catch (error) {
    donationNotice.hidden = false;
    donationNotice.textContent = 'Could not load donations-log.csv. Ensure the file exists and is valid CSV.';
  }
};

fetchInvestors();
fetchDonations();
