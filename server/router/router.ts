import { Router, Request, Response } from 'express';

const router = Router ();

router.get('/:user/all', async (req: Request, res: Response) => {
  const user = req.params.user;
  // need the list of fosters, events, and medication
  res.sendStatus(200);
})

router.get('/:user/:foster', async (req: Request, res: Response) => {
  //everything regarding the foster
  res.sendStatus(200);
})

router.post('/:user', async (req: Request, res: Response) => {
  //create new foster for user
  res.sendStatus(201);
})

router.put('/:user/:foster', async (req: Request, res: Response) => {
  //update foster information
  res.sendStatus(201);
})

router.delete('/:user/:foster', async (req: Request, res: Response) => {
  //delete foster
  res.sendStatus(201);
})

export default router;