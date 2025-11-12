export async function apiFetch(url, options = {}) {
    const token = localStorage.getItem("token");

    const defaultHeaders = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };

    const response = await fetch(url, {
        ...options,
        headers: { ...defaultHeaders, ...options.headers },
    });

    // Se o token for inválido, redireciona pro login
    if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
        return;
    }

    return response.json();
}
