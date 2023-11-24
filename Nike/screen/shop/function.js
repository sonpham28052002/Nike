import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const setOptionDrawer = (navigation, routeParams) => {
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity
                onPress={() => {
                    routeParams.setOptions({
                        headerShown: true
                    })
                    navigation.navigate("Shop", routeParams);
                }}
            >
                <AntDesign
                    style={{ marginLeft: 20 }}
                    name="arrowleft"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        )
    })
}

function searchAndSort(query, results) {
    const scoredResults = [];
    let matchIndex = -1;
    let tag = 'brand'
    results.forEach(result => {
        // Tính vị trí trùng khớp của tag với từ khóa tìm kiếm
        matchIndex = result.tag.toLowerCase().indexOf(query.toLowerCase());
        if (matchIndex >= 0)
            scoredResults.push({ result: result.tag, matchIndex });
    });
    // Nếu tìm trong tag không có
    if (scoredResults.length == 0) {
        results.forEach(result => {
            // Tính vị trí trùng khớp của name với từ khóa tìm kiếm
            matchIndex = result.name.toLowerCase().indexOf(query.toLowerCase());
            if (matchIndex >= 0)
                scoredResults.push({ result: result.name, matchIndex });
        });
        // Nếu tìm trong name cũng không có thì thực hiện tìm theo brands
        if (scoredResults.length == 0) {
            results.forEach(result => {
                // Tính vị trí trùng khớp của name với từ khóa tìm kiếm
                matchIndex = result.brand.toLowerCase().indexOf(query.toLowerCase());
                if (matchIndex >= 0)
                    scoredResults.push({ result: result.brand, matchIndex });
            });
        } else //Nếu tìm thấy thì gắn thẻ tìm theo name
            tag = 'name'
    } else //Nếu tìm thấy thì gắn thẻ tìm theo tag
        tag = 'tag'
    if (scoredResults.length > 0) {
        // Sắp xếp kết quả theo vị trí trùng khớp tăng dần
        scoredResults.sort((a, b) => a.matchIndex - b.matchIndex);
        // Lọc kết quả trùng
        const arrTemp = scoredResults.map(item => item.result)
        const uniqueArray = arrTemp.reduce((accumulator, currentValue) => {
            if (!accumulator.includes(currentValue)) {
                accumulator.push(currentValue);
            }
            return accumulator;
        }, []);
        return { tag: tag, resultFounds: uniqueArray };
    }
    return {}
}

// function calculateMatchScore(query, result) {
//     const queryWords = query.toLowerCase().split(' ');
//     const resultWords = result.toLowerCase().split(' ');
//     // Đếm số từ khóa trùng khớp
//     const matchCount = queryWords.reduce((count, word) => count + resultWords.includes(word), 0);
//     return matchCount;
// }


export { setOptionDrawer, searchAndSort };