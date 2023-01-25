import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmModule } from './film/film.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { TypeModule } from './type/type.module';



@Module({
  imports: [ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: "127.0.0.1",
        port: 3306,
        username: 'root',
        password: '12345',
        database: "pokemon",
        autoLoadEntities: true,
        //============================================================================
        synchronize: true 
        //============================================================================
    }),
    PokemonModule,
    TypeModule,
    FilmModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
