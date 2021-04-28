const { getQiitaTags } = require("../src/fetch-sample")
const axios = require("axios")

describe("getQiitaTags", () => {

    test("[正常系]データがかえってくる。", async () => {
        // ダミーデータを返す。
        // axios.getで返すダミーデータを定義
        axios.get = jest.fn().mockResolvedValue({
            data: [
                { id: "A" },
                { id: "B" }
            ]
        });

        const actual = await getQiitaTags();
        expect(actual).toStrictEqual(["A", "B"])

    })
})