const mockItem = {
    kind: 'youtube#videoListResponse',
    etag: 'TyWqUOFYgTtIsjEwfHlDseEt2iY',
    items: [
        {
            kind: 'youtube#video',
            etag: '8-o4epfMaBmGh4YbLrJZrsyOD2Y',
            id: 'CHzlSGRvWPs',
            snippet: {
                publishedAt: '2017-03-08T22:41:43Z',
                channelId: 'UCUsm-fannqOY02PNN67C0KA',
                title: 'Wizeline',
                description:
                    'El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos gratuitos que ya comenzaron a impartirse en la ciudad.',
                thumbnails: {
                    default: {
                        url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/default.jpg',
                        width: 120,
                        height: 90,
                    },
                    medium: {
                        url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/mqdefault.jpg',
                        width: 320,
                        height: 180,
                    },
                    high: {
                        url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/hqdefault.jpg',
                        width: 480,
                        height: 360,
                    },
                },
                channelTitle: 'Noticieros Televisa',
                tags: [
                    'Wizeline',
                    'Fractal Posible',
                    'El plan de Wizeline',
                    'inteligencia artificial',
                ],
                categoryId: '25',
                liveBroadcastContent: 'none',
                defaultLanguage: 'es-419',
                localized: {
                    title: 'Wizeline',
                    description:
                        'El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el país, a través de cursos gratuitos que ya comenzaron a impartirse en la ciudad.',
                },
            },
        },
    ],
    pageInfo: {
        totalResults: 1,
        resultsPerPage: 1,
    },
}

export default mockItem
