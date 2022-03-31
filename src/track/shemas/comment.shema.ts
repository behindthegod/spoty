import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";


export type TrackDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    username: string;

    @Prop()
    text: string;

}

export const TrackSchema = SchemaFactory.createForClass(Comment);