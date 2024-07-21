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
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ParentWhereUniqueInput } from "../../parent/base/ParentWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumKidGender } from "./EnumKidGender";
import { EndeavorProgressCreateNestedManyWithoutKidsInput } from "./EndeavorProgressCreateNestedManyWithoutKidsInput";
import { PrizeProgressCreateNestedManyWithoutKidsInput } from "./PrizeProgressCreateNestedManyWithoutKidsInput";

@InputType()
class KidCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  profilePicture?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  yearOfBirth?: number | null;

  @ApiProperty({
    required: false,
    type: () => ParentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParentWhereUniqueInput)
  @IsOptional()
  @Field(() => ParentWhereUniqueInput, {
    nullable: true,
  })
  parent?: ParentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumKidGender,
  })
  @IsEnum(EnumKidGender)
  @IsOptional()
  @Field(() => EnumKidGender, {
    nullable: true,
  })
  gender?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => EndeavorProgressCreateNestedManyWithoutKidsInput,
  })
  @ValidateNested()
  @Type(() => EndeavorProgressCreateNestedManyWithoutKidsInput)
  @IsOptional()
  @Field(() => EndeavorProgressCreateNestedManyWithoutKidsInput, {
    nullable: true,
  })
  endeavorProgresses?: EndeavorProgressCreateNestedManyWithoutKidsInput;

  @ApiProperty({
    required: false,
    type: () => PrizeProgressCreateNestedManyWithoutKidsInput,
  })
  @ValidateNested()
  @Type(() => PrizeProgressCreateNestedManyWithoutKidsInput)
  @IsOptional()
  @Field(() => PrizeProgressCreateNestedManyWithoutKidsInput, {
    nullable: true,
  })
  prizeProgresses?: PrizeProgressCreateNestedManyWithoutKidsInput;
}

export { KidCreateInput as KidCreateInput };
