import { test, expect } from '@playwright/test';

test('GET API - verify user details', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.id).toBe(1);
});

test('POST API - create a user', async ({ request }) => {

    const requestBody = {
        name: 'Tejas',
        username: 'tejas',
        email: 'tejas@example.com'
    };

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/users',
        {
            data: requestBody
        }
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    expect(responseBody.name).toBe(requestBody.name);
    expect(responseBody.username).toBe(requestBody.username);
    expect(responseBody.email).toBe(requestBody.email);
});