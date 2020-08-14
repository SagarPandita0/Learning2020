using System;

namespace UserDefinedExceptions
{
    class Program
    {
        static void Main(string[] args)
        {
          //  throw new FileNotFoundException("File AAA not found!");//here only a string can be passed. No customization as such.
            throw new UserAlreadyLoggedInException("User already logged in");

        }

        public class UserAlreadyLoggedInException : Exception
        {
            /*
             * Your Exceptions class needs to define all constructors you want to provide.
             * The constructors of System.Exception are not virtual or abstract. 
             * The keyword base does not call the members of all base classes,
             * but of the one base class you provide in the class declaration.
             */
            public UserAlreadyLoggedInException(): base()
            {

            }
            public UserAlreadyLoggedInException(string message) : base(message)
            {

            }
            public UserAlreadyLoggedInException(string message, Exception innerException) : base(message, innerException)
            {
                //InnerException is used when one wishes to track the origin of exception.
            }
        }
    }
}
