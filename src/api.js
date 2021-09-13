export function GET_NEWS (token) {
  return {
    url: `https://newsapi.org/v2/everything?q=tesla&from=2021-08-13&sortBy=publishedAt&apiKey=${token}`,
    options: {
      method: "GET"
    }
  }
}