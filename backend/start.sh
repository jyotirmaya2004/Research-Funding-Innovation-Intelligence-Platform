#!/usr/bin/env bash
set -e

echo "=== Research Funding & Innovation Intelligence Platform ==="
echo "[*] Step 1: Running database migrations (Alembic)..."
alembic upgrade head

# Optional: Auto-provision admin if environment variables are provided
if [ -n "$ADMIN_EMAIL" ] && [ -n "$ADMIN_PASSWORD" ]; then
    echo "[*] Step 2: Provisioning administrator account ($ADMIN_EMAIL)..."
    python scripts/create_admin.py \
        --email "$ADMIN_EMAIL" \
        --password "$ADMIN_PASSWORD" \
        --name "${ADMIN_NAME:-Platform Administrator}" || true
fi

# Optional: Auto-seed demo scientific records and publications
if [ "$SEED_DEMO_DATA" = "true" ]; then
    echo "[*] Step 3: Seeding sample scientific records and publications..."
    python scripts/seed_demo_data.py || true
fi

echo "[*] Step 4: Starting Uvicorn server on port ${PORT:-8000}..."
exec uvicorn app.main:app --host 0.0.0.0 --port "${PORT:-8000}"
