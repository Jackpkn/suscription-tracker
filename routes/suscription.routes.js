import { Router } from "express";
const suscriptionRouter = Router();

suscriptionRouter.get("/", (req, res) =>
  res.send({ title: "GET all Suscriptions" })
);

suscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "GET Suscription Details" })
);

suscriptionRouter.post("/", (req, res) =>
  res.send({ title: "CREATE Suscription" })
);

suscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "UPDATE all Suscription" })
);

suscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "DELETE Suscription" })
);

suscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "GET all user Suscription" })
);

suscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "Cancel Suscription" })
);

suscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "GET upcoming renewals" })
);
export default suscriptionRouter;
