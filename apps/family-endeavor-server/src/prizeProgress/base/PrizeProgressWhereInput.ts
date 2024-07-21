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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { KidWhereUniqueInput } from "../../kid/base/KidWhereUniqueInput";
import { PrizeWhereUniqueInput } from "../../prize/base/PrizeWhereUniqueInput";

@InputType()
class PrizeProgressWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  datePurchased?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: () => KidWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => KidWhereUniqueInput)
  @IsOptional()
  @Field(() => KidWhereUniqueInput, {
    nullable: true,
  })
  kid?: KidWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => PrizeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PrizeWhereUniqueInput)
  @IsOptional()
  @Field(() => PrizeWhereUniqueInput, {
    nullable: true,
  })
  prize?: PrizeWhereUniqueInput;
}

export { PrizeProgressWhereInput as PrizeProgressWhereInput };
