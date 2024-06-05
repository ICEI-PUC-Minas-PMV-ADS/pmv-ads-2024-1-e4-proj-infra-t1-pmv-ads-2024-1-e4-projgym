export async function userupdate(name, email, password, confirmPassword) {
    const response = await axios.post("http://192.168.100.67:3333/users/edit", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })
    return (response.status == 200)
}