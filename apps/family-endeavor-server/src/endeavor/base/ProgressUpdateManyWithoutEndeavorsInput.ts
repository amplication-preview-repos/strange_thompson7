/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProgressWhereUniqueInput } from "../../progress/base/ProgressWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProgressUpdateManyWithoutEndeavorsInput {
  @Field(() => [ProgressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProgressWhereUniqueInput],
  })
  connect?: Array<ProgressWhereUniqueInput>;

  @Field(() => [ProgressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProgressWhereUniqueInput],
  })
  disconnect?: Array<ProgressWhereUniqueInput>;

  @Field(() => [ProgressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProgressWhereUniqueInput],
  })
  set?: Array<ProgressWhereUniqueInput>;
}

export { ProgressUpdateManyWithoutEndeavorsInput as ProgressUpdateManyWithoutEndeavorsInput };
