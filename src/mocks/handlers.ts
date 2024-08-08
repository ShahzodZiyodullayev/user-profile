import { http, HttpResponse } from "msw";
// import fs from "fs";
// import path from "path";

// const dataFilePath = path.resolve(__dirname, "data.json");

// Helper function to read data from JSON file
// const readData = () => {
//   const rawData = fs.readFileSync(dataFilePath, "utf-8");
//   return JSON.parse(rawData);
// };

// // Helper function to write data to JSON file
// const writeData = (data: any) => {
//   fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
// };

export const handlers = [
  http.post("/api/login", async ({ request }) => {
    try {
      const { email, password }: any = await request.json();

      if (email === "a@a.a" && password === "qwertyui") {
        return HttpResponse.json({
          data: {
            userId: "8df62709-d08e-414e-8efe-767ecb5ff78c",
            accessToken:
              "fjdaiuhf73qohof7q39eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAbWFpbC5jb20ifQ.SQwfuykDf-br6se2Xcfzc_ZSSXI38W8FRkZBwxxB4Bc8fgoa",
            refreshToken:
              "fjdaiuhfeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAbWFpbC5jb20ifQ.SQwfuykDf-br6se2Xcfzc_ZSSXI38W8FRkZBwxxB4Bc73qohof7q398fgoa",
          },
          status: 200,
        });
      } else {
        return HttpResponse.json({
          status: 403,
          message: "Bunday foydalanuvchi mavjud emas",
        });
      }
    } catch (error) {
      console.log("😡", error);
    }
  }),

  http.get("/api/users", () => {
    // const data = readData();

    console.log("iuhguktyouyliuj");

    return HttpResponse.json({
      data: {
        firstName: "Shahzod",
        lastName: "Ziyodullayev",
        street: "Bog'ishamol",
        country: "Uzbekistan",
        city: "Tashkent",
        avatar: "https://i.pravatar.cc/150?img=12",
        bio: `👋 Salom! Men John Doe, dunyoni o'zgartirishga intiluvchi texnologiya va innovatsiyalar ishqibozi.
      💼 **Kasbim:** Full-Stack Dasturchi | Open Source hissa qo'shuvchi | Texnologiya mentor
      🌐 **Loyihalar:** Mening asosiy e'tiborim - web va mobil ilovalar yaratish. Men har kuni yangi texnologiyalar va dasturlash tillarini o'rganishga intilaman. O'zim yaratgan open source loyihalarim bilan hamjamiyatga yordam berishni yaxshi ko'raman.
      🎓 **Ta'lim:** Computer Science bo'yicha magistr darajasiga egaman va ushbu sohada ko'plab kurs va sertifikatlarni tugatganman.
      🌱 **Hobbi:** Texnologiyadan tashqari, men tabiatni sevaman, tog'ga chiqishni yoqtiraman va yangi joylarni o'rganishni yaxshi ko'raman. Shuningdek, musiqa tinglash va o'zim ham gitara chalishni yoqtiraman.
      🤝 **Hamkorlik:** Yangi loyihalar va hamkorliklar uchun doimo ochiqman. Agar sizda qiziqarli g'oyalar yoki takliflar bo'lsa, menga murojaat qiling!
      📫 **Aloqa:** Menga [email@example.com](mailto:email@example.com) orqali murojaat qiling yoki DM orqali bog'laning!
      Let's build something amazing together! 🚀`,
      },
    });
  }),

  http.put("/api/update-user", async ({ request }) => {
    const req: any = await request.json();
    console.log("update user", req);

    const newData = req.body;
    // writeData(newData);

    return HttpResponse.json({
      update: "ok",
    });
  }),

  http.post("/api/messages", async ({ request }) => {
    const authToken = request.headers.get("Authorization");
    if (!authToken)
      return HttpResponse.json({ msg: "Unauthorized" }, { status: 401 });
    const requestBody: any = await request.json();
    console.log(requestBody);

    return HttpResponse.json(
      {
        content: requestBody?.content,
        createdAt: new Date().toLocaleString(),
      },
      { status: 201 },
    );
  }),
];
