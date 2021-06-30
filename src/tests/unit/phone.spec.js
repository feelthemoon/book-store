import phoneFilter from "@/filters/phone.filter";

describe("Фильтр для телефона", () => {
  it("Расстановка знаков и пробелов", () => {
    expect(phoneFilter("79104624649")).toEqual("+7 (910) 462-46-49");
  });
});
