import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { userInfo } from "os";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: { answer },
  } = req;
  //   const post = await client.post.findUnique({
  const newAnswer = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: +id.toString(),
        },
      },
      answer,
    },
  });
  console.log(newAnswer);
  //     where: {
  //       id: +id.toString(),
  //     },
  //     select: {
  //       id: true,
  //     },
  //   });
  //   res.json({
  //     ok: true,
  //   });
  //   if(!post) post 존재 유무 확인
  res.json({
    ok: true,
    answer: newAnswer,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
