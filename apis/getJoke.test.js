import getJoke from './getJoke.js';

describe('getJoke function', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch a joke successfully', async () => {
        // Create a mock response object
        const mockResponse = {
            ok: true,
            json: jest.fn().mockResolvedValue({ joke: 'A random joke' }),
        };

        // Mock the global fetch function
        global.fetch = jest.fn().mockResolvedValue(mockResponse);

        // Call the function and check the result
        const result = await getJoke();
        expect(result).toEqual({ joke: 'A random joke' });
    });

    it('should handle a not ok response', async () => {
        // Create a mock response object with an error status
        const mockResponse = {
            ok: false,
            status: 404,
        };

        global.fetch = jest.fn().mockResolvedValue(mockResponse);

        try {
            await getJoke();
        } catch (err) {
            expect(err.message).toBe(
                'Failed to fetch a joke with status : 404 ',
            );
        }
    });

    it('should handle a network error', async () => {
        // Mock the global fetch function to reject with an error
        global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

        // Spy on console.error to ensure it was called with the correct message
        jest.spyOn(console, 'error').mockImplementation(() => {});

        await getJoke();

        expect(console.error).toHaveBeenCalledWith(new Error('Network error'));
    });
});
