import React, { useMemo, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

const OTHER_VALUE = '__other__';

const FLAVOR_OPTIONS = [
  'Maui Mango',
  'Cherry Punch',
  'Blueberry Acai',
  'Victorian Earl Grey',
  'Nutty Almond',
  'Peach Paradise',
  'Coconut Chia',
  'Ginger Turmeric',
];

function getDeviceId() {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('device')?.trim() || '';
}

export default function AssignFlavor() {
  useTheme();

  const deviceId = useMemo(() => getDeviceId(), []);
  const endpoint = import.meta.env.VITE_ASSIGN_FLAVOR_ENDPOINT;
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [customFlavor, setCustomFlavor] = useState('');
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const flavor =
    selectedFlavor === OTHER_VALUE ? customFlavor.trim() : selectedFlavor.trim();
  const canSubmit = Boolean(deviceId && flavor && !isSubmitting);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!deviceId) {
      setStatus({ type: 'error', message: 'This QR code is missing a device.' });
      return;
    }

    if (!endpoint) {
      setStatus({
        type: 'error',
        message: 'Assignment endpoint is not configured yet.',
      });
      return;
    }

    if (!flavor) {
      setStatus({ type: 'error', message: 'Choose or enter a flavor.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: deviceId, flavor }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.ok === false) {
        throw new Error(result.message || 'Assignment failed. Please try again.');
      }

      setStatus({
        type: 'success',
        message: `${flavor} saved. You are all set.`,
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Assignment failed. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-body-light px-5 py-8 text-title-light dark:bg-body-dark dark:text-title-dark">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md flex-col justify-center">
        <div className="mb-8 flex justify-center">
          <img
            src="/assets/img/rimfixtures-logo.png"
            alt="RIM Fixtures"
            className="h-20 w-auto"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-gray-200 bg-container-light p-6 shadow-soft dark:border-gray-800 dark:bg-container-dark dark:shadow-soft-dark"
        >
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Bin Setup
            </p>
            <h1 className="text-3xl font-semibold leading-tight">
              Assign flavor
            </h1>
            <p className="mt-3 text-sm text-text-light dark:text-text-dark">
              Choose the product loaded in this bin.
            </p>
          </div>

          {!deviceId && (
            <div className="mb-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              This QR code is missing a device. Please scan the device sticker
              again.
            </div>
          )}

          <label
            htmlFor="flavor"
            className="mb-2 block text-sm font-medium text-title-light dark:text-title-dark"
          >
            Flavor
          </label>
          <select
            id="flavor"
            value={selectedFlavor}
            onChange={(event) => setSelectedFlavor(event.target.value)}
            className="mb-4 h-12 w-full rounded-lg border border-gray-300 bg-white px-3 text-base text-title-light outline-none transition-colors focus:border-primary dark:border-gray-700 dark:bg-body-dark dark:text-title-dark"
            disabled={!deviceId || isSubmitting}
          >
            <option value="">Select a flavor</option>
            {FLAVOR_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value={OTHER_VALUE}>Other</option>
          </select>

          {selectedFlavor === OTHER_VALUE && (
            <>
              <label
                htmlFor="custom-flavor"
                className="mb-2 block text-sm font-medium text-title-light dark:text-title-dark"
              >
                Other flavor
              </label>
              <input
                id="custom-flavor"
                type="text"
                value={customFlavor}
                onChange={(event) => setCustomFlavor(event.target.value)}
                className="mb-4 h-12 w-full rounded-lg border border-gray-300 bg-white px-3 text-base text-title-light outline-none transition-colors focus:border-primary dark:border-gray-700 dark:bg-body-dark dark:text-title-dark"
                placeholder="Enter flavor"
                disabled={!deviceId || isSubmitting}
                maxLength={80}
              />
            </>
          )}

          <button
            type="submit"
            disabled={!canSubmit}
            className="mt-2 h-12 w-full rounded-lg bg-primary px-4 text-base font-semibold text-white shadow-button transition-colors hover:bg-primary-alt disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-600 disabled:shadow-none dark:disabled:bg-gray-700 dark:disabled:text-gray-400"
          >
            {isSubmitting ? 'Saving...' : 'Save flavor'}
          </button>

          {status.message && (
            <p
              className={`mt-4 rounded-md px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
              role="status"
            >
              {status.message}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
