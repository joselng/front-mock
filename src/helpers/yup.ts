import { documentValid } from 'src/helpers/validators'
import * as yup from 'yup'
import { AnyObject, Maybe } from 'yup/lib/types'

yup.addMethod<yup.StringSchema>(yup.string, 'document', function (message) {
    return this.test('document', message, (value, { path, createError }) => {
        if (!value || documentValid(value)) {
            return true
        }

        return createError({
            path,
            message,
        })
    })
})

declare module 'yup' {
    interface StringSchema<
        TType extends Maybe<string> = string,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType
    > extends yup.BaseSchema<TType, TContext, TOut> {
        document(message?): StringSchema<TType, TContext>
    }
}

export default yup
