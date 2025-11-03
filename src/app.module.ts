import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://oluseyelam:oluseyelam2024@cluster0.jaltli6.mongodb.net/'), 
    UserModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
