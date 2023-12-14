export async function getLatestBlogs() {
    return fetch('/.netlify/functions/api/latestblogs', { method: 'get' })
        .then(response => response.json())
        .then(res => res)
}

export async function getBlogById(id) {
    return fetch(`/.netlify/functions/api/blog/${id}`, { method: 'get' })
        .then(res => res.json())
        .then(res => res)
}

export async function getBlogsPaginated(page, limit, searchKeyword) {
    const searchKey = searchKeyword || '(.*?)'
    console.log(searchKey)
    return fetch('/.netlify/functions/api/blogs?' + new URLSearchParams({
        page: page,
        limit: limit,
        searchKey: searchKey || ''
    }), {
        method: 'get'
    })
        .then(res => res.json())
        .then(res => res)
}