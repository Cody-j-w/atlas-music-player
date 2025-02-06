import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const mockData = [
    {
        id: "1",
        title: "test 1",
        artist: "Test One",
        genre: "test",
        duration: 194
    },
    {
        id: "2",
        title: "test 2",
        artist: "Test Two",
        genre: "test",
        duration: 194
    },
    {
        id: "3",
        title: "test 3",
        artist: "Test Three",
        genre: "test",
        duration: 194
    },
    {
        id: "4",
        title: "test 4",
        artist: "Test Four",
        genre: "test",
        duration: 194
    },
    {
        id: "5",
        title: "test 5",
        artist: "Test Five",
        genre: "test",
        duration: 194
    },
    {
        id: "6",
        title: "test 6",
        artist: "Test Six",
        genre: "test",
        duration: 194
    },
    {
        id: "7",
        title: "test 7",
        artist: "Test Seven",
        genre: "test",
        duration: 194
    },
    {
        id: "8",
        title: "test 8",
        artist: "Test Eight",
        genre: "test",
        duration: 194
    },
    {
        id: "9",
        title: "test 9",
        artist: "Test Nine",
        genre: "test",
        duration: 194
    },
    {
        id: "10",
        title: "test 10",
        artist: "Test Ten",
        genre: "test",
        duration: 194
    }
];

const mockIndexOne = {
    id: "cm3ixp4sy0thg0cmtdzukgg56",
    title: "test 1",
    artist: "Test One",
    genre: "test",
    duration: 194,
    cover: "placeholder.svg"
}

export const handlers = [
    http.get('/api/v1/playlist', () => {
        return HttpResponse.json(mockData);
    }),
    http.get(`/api/v1/songs/:id`, (req) => {
        const { id } = req.params
        const payload = {
            id: id,
            title: `test ${id}`,
            artist: `Test ${id}`,
            genre: "test",
            duration: 194,
            cover: "placeholder.svg"
        }
        console.log(payload)
        return HttpResponse.json(payload);
    })
];

export const server = setupServer(...handlers);
