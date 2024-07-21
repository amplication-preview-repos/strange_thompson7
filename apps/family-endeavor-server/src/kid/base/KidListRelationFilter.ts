/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { KidWhereInput } from "./KidWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class KidListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => KidWhereInput,
  })
  @ValidateNested()
  @Type(() => KidWhereInput)
  @IsOptional()
  @Field(() => KidWhereInput, {
    nullable: true,
  })
  every?: KidWhereInput;

  @ApiProperty({
    required: false,
    type: () => KidWhereInput,
  })
  @ValidateNested()
  @Type(() => KidWhereInput)
  @IsOptional()
  @Field(() => KidWhereInput, {
    nullable: true,
  })
  some?: KidWhereInput;

  @ApiProperty({
    required: false,
    type: () => KidWhereInput,
  })
  @ValidateNested()
  @Type(() => KidWhereInput)
  @IsOptional()
  @Field(() => KidWhereInput, {
    nullable: true,
  })
  none?: KidWhereInput;
}
export { KidListRelationFilter as KidListRelationFilter };
