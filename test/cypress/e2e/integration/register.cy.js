
import { faker } from '@faker-js/faker';
import { generate } from '@faker-js/faker'
import create from '../pages/RegisterPage'
import registerFactory from '../factories/RefisterFactory'

describe('Create user Aesop',()=>{

    it('Create user aesop', function(){
    
        var data = registerFactory.register()
    
        create.go()
        create.fillForm(data)
        create.finish()

    })
})
