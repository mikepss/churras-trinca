import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider_id: string;
  description: string;
  total_meat: number;
  total_drinks: number;
  total_price: number;
  total_participants: number;
  date: Date;
}

class CreateAppointmentService {
  public async execute({
    date,
    description,
    provider_id,
    total_drinks,
    total_meat,
    total_participants,
    total_price,
  }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointment = appointmentsRepository.create({
      provider_id,
      description,
      total_meat,
      total_drinks,
      total_price,
      total_participants,
      date,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
