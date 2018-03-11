import * as env from './env'


const serverUrl = `http://localhost:3001`;

//Get all of the categories available for the app. List is found in categories.js.
//Feel free to extend this list as you desire
export const fetchCategories = () => {
    let searchUrl = '/categories';
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'GET'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Get all of the posts. Useful for the main page when no category is selected
export const fetchPosts = () => {
    let searchUrl = '/posts';
    let token = localStorage.getItem('token') || Math.random() + 'zoe';
    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'GET'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
            console.log('data', data);
            return data;
    });
};

//Get all of the posts for a particular category
export const fetchPostsForCategory = (category) => {
    let searchUrl = `/${category.name}/posts`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'GET'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Add a new post
export const addNewPost = (params) => {
    let searchUrl = `/posts`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const body = {
        id: params.id,
        timestamp: params.timestamp,
        title: params.title,
        body: params.body,
        author: params.author,
        category: params.category
    }

    const data = {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body)
    }

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Get the details of a single post
export const fetchDetailsForSinglePost = (postId) => {
    let searchUrl = `/posts/${postId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'GET'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Used for voting on a post
export const votingOnPost = (postId, params) => {
    let searchUrl = `/posts/${postId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const body = {
        option: params.option // "upVote" or "downVote"
    }

    const data = {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body)
    }

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Edit the details of an existing post
export const editPost = (postId, params) => {
    let searchUrl = `/posts/${postId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const body = {
        title: params.title,
        body: params.body
    }

    const data = {
        headers: headers,
        method: 'PUT',
        body: JSON.stringify(body)
    }

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Sets the deleted flag for a post to 'true'.
//Sets the parentDeleted flag for all child comments to 'true'.
export const deleteFlag = (postId) => {
    let searchUrl = `/posts/${postId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'DELETE'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Sets a comment's deleted flag to 'true'
export const deletedFlagCommentToTrue = (commentId) => {
    let searchUrl = `/comments/${commentId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'DELETE'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Get all the comments for a single post
export const getCommentsForPost = (postId) => {
    let searchUrl = `/posts/${postId}/comments`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'GET'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        debugger;
        return data;
    });
};

//Get the details for a single comment
export const getDetailsForComment = (commentId) => {
    let searchUrl = `/comments/${commentId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Authorization': token
    };

    const data = {
        headers : {...headers},
        method: 'GET'
    };

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data.comments
    });
};

//Add a comment to a post
export const addCommentToPost = (params) => {
    let searchUrl = `/comments`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const body = {
        id: params.id,
        timestamp: params.timestamp,
        body: params.body,
        author: params.author,
        parentId: params.parentId
    }

    const data = {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body)
    }

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Used for voting on a comment
export const votingOnComment = (commentId, params) => {
    let searchUrl = `/comments/${commentId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const body = {
        option: params.option
    }

    const data = {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(body)
    }

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};

//Edit the details of an existing comment
export const editExistingComment = (commentId, params) => {
    let searchUrl = `/comments/${commentId}`;
    let token = localStorage.getItem('token') || Math.random() + 'zoe';

    const url = `${serverUrl}${searchUrl}`;

    const headers = {
        'Accept': 'application/json',
        'Authorization': token,
        'Content-Type': 'application/json'
    }

    const body = {
        timestamp: params.timestamp,
        body: params.body
    }

    const data = {
        headers: headers,
        method: 'PUT',
        body: JSON.stringify(body)
    }

    return fetch(url, data).then((res) => {
        return res.json()
    }).then((data) => {
        console.log('data', data);
        return data;
    });
};