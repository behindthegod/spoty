import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Schema} from "mongoose";
import ObjectId = module


export type TrackDocument = Track & Document;

@Schema()
export class Track {
    @Prop()
    name: string;

    @Prop()
    artist: number;

    @Prop()
    track: string;

    @Prop()
    listens: number;

    @Prop()
    picture: string;

    @Prop( )
    audio: string;

    @Prop({type: [{type: ObjectId}]})
    comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);