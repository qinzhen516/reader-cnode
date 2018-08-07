export const fetchIndexData = async(type,page,limit) => {
    return fetch(`https://cnodejs.org/api/v1/topics?tab=${type}&page=${page}&limit=${limit}`).then(res => res.json());
}
// export const fetchDetailData = async(id) => {
//     return fetch(`https://cnodejs.org/api/v1/topic/${id}`).then(res => res.json());
// }
