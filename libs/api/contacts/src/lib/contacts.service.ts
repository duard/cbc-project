import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Contact } from './contact';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>
  ) {}

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }

  async create(contact: Contact): Promise<Contact> {
    const userNameExist = await this.contactModel.findOne({
      name: contact.name,
    });

    if (userNameExist) {
      throw new HttpException(
        `name '${contact.name}' has already been registered`,
        HttpStatus.BAD_REQUEST
      );
    }

    const userEmailExist = await this.contactModel.findOne({
      email: contact.email,
    });

    if (userEmailExist) {
      throw new HttpException(
        `email '${contact.email}' has already been registered`,
        HttpStatus.BAD_REQUEST
      );
    }

    const userMobileExist = await this.contactModel.findOne({
      mobile: contact.mobile,
    });
    if (userMobileExist) {
      throw new HttpException(
        `mobile '${contact.mobile}' has already been registered`,
        HttpStatus.BAD_REQUEST
      );
    }

    const createdContact = new this.contactModel(contact);

    return createdContact.save();
  }

  async findById(id: string): Promise<Contact> {
    return this.contactModel.findById(id).exec();
  }

  async update(id: string, contact: Contact): Promise<Contact> {
    return this.contactModel.findByIdAndUpdate(id, contact).exec();
  }

  async remove(id: string) {
    const removedContact = this.contactModel
      .findOneAndDelete({ _id: id })
      .exec();

    return (await removedContact).remove();
  }
}
