import { Router, Request, Response } from 'express';
const model = require('../db/models')
const router = Router ();

router.get('/:user', async (req: Request, res: Response) => {
  try {
    const user = req.params.user;
    const dashboardInfo = await model.getDashboardInfo(user);
    // need the list of fosters, events, and medication
    res.status(200).json(dashboardInfo);
  } catch (err) {
    res.sendStatus(404);
  }
})

router.get('/:user/:foster', async (req: Request, res: Response) => {
  //everything regarding the foster
  try {
    const user = req.params.user;
    const foster = req.params.foster;
    const fosterInfo = await model.getFosterInfo(user, foster);
    res.status(200).json(fosterInfo);
  } catch (err) {
    res.sendStatus(404);
  }
})

router.post('/', async (req: Request, res: Response) => {
  //create new foster for user
  try {
    const newData = req.body;
    console.log('--data for post req--', newData)
    const posted = await model.addFoster(newData);
    res.status(201).json(posted);
  } catch (err) {
    res.sendStatus(404);
  }
})

router.post('/:id', async (req: Request, res: Response) => {
  //add new notes
  try {
    const newData = req.body;
    const id = req.params.id;
    const posted = await model.updateFoster(id, newData);
    res.status(201).json(posted);
  } catch (err) {
    res.sendStatus(404);
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  //delete foster
  try {
    const id = req.params.id;
    console.log(id);
    const deleted = await model.updateFoster(id);
    res.status(201).json(deleted);
  } catch (err) {
    res.sendStatus(404);
  }
})

export default router;