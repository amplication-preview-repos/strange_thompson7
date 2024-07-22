/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsOptional,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Kid } from "../../kid/base/Kid";
import { Prize } from "../../prize/base/Prize";
import { EnumPrizeProgressStatus } from "./EnumPrizeProgressStatus";

@ObjectType()
class PrizeProgress {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  datePurchased!: Date | null;

  @ApiProperty({
    required: false,
    type: () => Kid,
  })
  @ValidateNested()
  @Type(() => Kid)
  @IsOptional()
  kid?: Kid | null;

  @ApiProperty({
    required: false,
    type: () => Prize,
  })
  @ValidateNested()
  @Type(() => Prize)
  @IsOptional()
  prize?: Prize | null;

  @ApiProperty({
    required: false,
    enum: EnumPrizeProgressStatus,
  })
  @IsEnum(EnumPrizeProgressStatus)
  @IsOptional()
  @Field(() => EnumPrizeProgressStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateRedeemed!: Date | null;
}

export { PrizeProgress as PrizeProgress };
