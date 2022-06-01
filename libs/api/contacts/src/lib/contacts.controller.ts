import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Contact } from './contact';
import { ContactsService } from './contacts.service';
import { CreateContactDTO } from './dto/contact.dto';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  async findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }

  @Post()
  async create(@Body() createContactDTO: CreateContactDTO): Promise<Contact> {
    console.log(createContactDTO);
    return this.contactsService.create(createContactDTO);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() contactAtualizado: Contact
  ): Promise<Contact> {
    return this.contactsService.update(id, contactAtualizado);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Contact> {
    return this.contactsService.remove(id);
  }
}
