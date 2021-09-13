import LoginApi from './Login.api'

const mock = {
    avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
    id: '123',
    name: 'Wizeline',
}

it('should work with right credentials', async () => {
    try {
        await LoginApi('wizeline', 'Rocks!').then((data) => expect(data).toEqual(mock))
    } catch (e) {
        expect(e).not.toEqual(mock)
    }
})
it('should not work with wrong credentials', async () => {
    try {
        await LoginApi('xwizeline', 'xRocks!').then((data) => expect(data).toEqual(mock))
    } catch (e) {
        expect(e).not.toEqual(mock)
    }
})
