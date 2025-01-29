import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const mockData = [
    {
        id: "cm3ixp4sy0thg0cmtdzukgg56",
        title: "test 1",
        artist: "Test One",
        genre: "test",
        duration: 194
    },
    {
        id: "kjy3ny0k1jt9p83srhdyg7mb",
        title: "test 2",
        artist: "Test Two",
        genre: "test",
        duration: 194
    },
    {
        id: "soammx6oibpan244my4toqke",
        title: "test 3",
        artist: "Test Three",
        genre: "test",
        duration: 194
    },
    {
        id: "a6pkp78whsyqdvpb5dxn64ss",
        title: "test 4",
        artist: "Test Four",
        genre: "test",
        duration: 194
    },
    {
        id: "hdees11mmk6g078ewijlly1r",
        title: "test 5",
        artist: "Test Five",
        genre: "test",
        duration: 194
    },
    {
        id: "sg9obf34n8qtnpq5t19w1b9a",
        title: "test 6",
        artist: "Test Six",
        genre: "test",
        duration: 194
    },
    {
        id: "u7wkgyiyiz7xuxcueoxzb5d5",
        title: "test 7",
        artist: "Test Seven",
        genre: "test",
        duration: 194
    },
    {
        id: "kp4z671fsjcmuobji96z6p95",
        title: "test 8",
        artist: "Test Eight",
        genre: "test",
        duration: 194
    },
    {
        id: "ycvdpo1n76ap0x2u67gy9gab",
        title: "test 9",
        artist: "Test Nine",
        genre: "test",
        duration: 194
    },
    {
        id: "jxjrthcu47rrpan548evirgu",
        title: "test 10",
        artist: "Test Ten",
        genre: "test",
        duration: 194
    }
];

export const handlers = [
    http.get('http://localhost:5173/api/v1/playlist', () => {
        return HttpResponse.json(mockData);
    }),
];

export const server = setupServer(...handlers);
