
export const apiSettings = {
  fetchWeekDayJobs: async (payload: any) => {
      const endpoint: string = `https://api.weekday.technology/adhoc/getSampleJdJSON`;
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        ...payload
      });

      const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };
    return await (await fetch(endpoint, requestOptions)).json();
  },
}