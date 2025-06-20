import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, type Mock, vi } from 'vitest';
import { http, HttpResponse } from 'msw';
import { act, renderHook, waitFor } from '@testing-library/react';
import { SessionProvider, useSession } from '../context/AuthContext';
import { useOrders } from './useOrders';
import { server } from '../mocks/server';

vi.mock('../context/AuthContext', async () => {
  const actual = await vi.importActual('../context/AuthContext');
  return { ...actual, useSession: vi.fn() };
});

describe('useOrders MSW', () => {
  const mockUser = { id: '1', name: 'Kevin Zea' };

  beforeEach(() => {
    (useSession as Mock).mockReturnValue({ user: mockUser });
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <SessionProvider>
      <MemoryRouter>{children}</MemoryRouter>
    </SessionProvider>
  );

  it('should get data correctly', async () => {
    const { result } = renderHook(() => useOrders(), { wrapper });

    expect(result.current.loading).toBe(true);

    await act(async () => {});

    expect(result.current.loading).toBe(false);
    expect(result.current.orders.length).toBe(5);
  });

  it('should get an error', async () => {
    server.use(
      http.get('http://localhost:3001/orders', () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: 'Internal Server Error',
        });
      })
    );

    const { result } = renderHook(() => useOrders(), { wrapper });

    await waitFor(async () => {
      expect(result.current.error).toBe(
        'Failed to fetch orders. Please try again later.'
      );
    });
  });
});
