import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.get('/', async (request, response) => {
  try {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();

    return response.json(appointments);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

appointmentsRouter.post('/', async (request, response) => {
  try {
    const {
      provider_id,
      description,
      total_meat,
      total_drinks,
      total_price,
      total_participants,
      date,
    } = request.body;

    const createAppointment = new CreateAppointmentService();

    const appointment = await createAppointment.execute({
      provider_id,
      description,
      total_meat,
      total_drinks,
      total_price,
      total_participants,
      date,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
