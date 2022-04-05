import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://Ilya:admin@cluster0.h2eoo.mongodb.net/spoty?retryWrites=true&w=majority'),
        TrackModule,

    ]
})

export class AppModule{}