const conta = {
    email: 'carlos@dio.bank',
    password: '123456',
    name: 'Carlos eduardo',
    balance: 100000.000,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
