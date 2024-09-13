'use server'

const url = process.env.SENDER_URL;

const subs = "subscribers"

const headers = {
    "Authorization": `Bearer ${process.env.SENDER_API_TOKEN}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
};

export const addSubscriber = async(formData) => {
    let email = formData.get('email')
    
    let data = {
        "email": email
    }

    try {
        fetch(url+subs, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        }).then(response => response.json());
    } catch (error) {
      throw error;
    }
};