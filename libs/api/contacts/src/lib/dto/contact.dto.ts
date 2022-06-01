import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateContactDTO {
  /**
   * The name of contact
   * @example 'Admiral James T. Kirk'
   */
  @IsNotEmpty({ message: `"name" should not be empty.` })
  @IsString({ message: `"name" should be a string.` })
  @MaxLength(50, { message: `"name" lenght should be 50 characters maximum.` })
  name: string;

  /**
   * The email of contact
   * @example 'jtkirk@enterprise.com'
   */
  @IsEmail()
  @IsNotEmpty({ message: `"email" is required.` })
  @IsString({ message: `"email" should be a string.` })
  @MaxLength(64, { message: `"email" lenght should be 64 characters maximum.` })
  email: string;

  /**
   * The telephone of contact
   * @example '+5511964544544'
   */
  @IsNotEmpty({ message: `"mobile" is required.` })
  @IsString({ message: `"telephone" should be a string.` })
  mobile: string;
}
