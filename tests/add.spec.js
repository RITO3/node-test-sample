const { add, addAsync } = require("../src/add")

describe("add関数のテスト", () => {
    test("[正常系]足し算できる。", () => {
        const actual = add(100, 200)
        expect(actual).toBe(300)
    })
})

describe("addAsync関数のテスト", () => {
    test("[正常系]足し算できる。", async () => {
        const actual = await addAsync(100, 200)
        expect(actual).toBe(300)
    })
})