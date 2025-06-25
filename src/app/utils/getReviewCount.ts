export async function getReviewCount(goodsId: string) {
  const url = `https://mapi-dev.oliveyoung.co.kr/review/api/v1/goods/detail/statistics/${goodsId}?photoCnt=2`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch review count: ${res.status}`);
  }

  return (await res.json()).data.reviewCnt;
}
