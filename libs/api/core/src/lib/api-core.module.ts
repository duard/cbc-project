import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `${
        process.env.MONGO_DB_CONNECTION ||
        'mongodb://cbs-mongo:27017/nest_mongoDB'
      }`
    ),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class ApiCoreModule {
  constructor() {
    console.log(`=>`, process.env.MONGO_DB_CONNECTION);
  }
}
